import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import particles from 'pixi-particles'; // eslint-disable-line
import * as filters from "pixi-filters";
import _ from 'lodash';
import './Video.css';

/**
 * Particles
 * @constructor
 */

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  getDimentions(){
    const { w } = this.props;
    return (
      {
        width: w,
        height: (w / 16) * 9
      }
    );
  }
  componentDidMount(){
    const { w } = this.props;
    this.throttledMouseMove = _.throttle(this.throttledMouseMove.bind(this), 50);

    // PIXI
    this.app = new PIXI.Application(
      this.getDimentions().width,
      this.getDimentions().height,
      {
        antialias: true,
        transparent: true
      }
    );

    this.app.stage.interactive = true;
    this.pixiCont.appendChild(this.app.view);

    // Stage
    this.stageContainer = new PIXI.Container();
    this.app.stage.addChild(this.stageContainer);

    // Mouse
    this.mouseContainer = new PIXI.Container();
    this.app.stage.addChild(this.mouseContainer);
    this.mouse = {
      clientX: 0,
      clientY: 0
    };





    // Stetch the fullscreen
    this.addVideo();






    // Mask
    // Mouse Shape
    this.mouseShape = new PIXI.Graphics();
    this.mouseShape.lineStyle(0);
    this.mouseShape.beginFill(0xFFFF0B, 0.5);
    this.mouseShape.drawCircle(0,0,300);
    this.mouseShape.endFill();
    this.mouseContainer.addChild(this.mouseShape);
    this.mouseContainer.mask = this.mouseShape;
    this.mouseContainer.blendMode = PIXI.BLEND_MODES.ADD;





    // Stage Filters
    this.count = 0;
    this.CRTfilter = new filters.CRTFilter();
    //this.GodrayFilter = new filters.GodrayFilter(30,0.5,2.5,false,0,[0,0]);
    this.AsciiFilter = new filters.AsciiFilter(10);
    //let AdvancedBloomFilter = new filters.AdvancedBloomFilter(0.5, 1.0, 1.0);
    //this.mouseContainer.filters = [this.CRTfilter, this.GodrayFilter, this.AsciiFilter];
    this.stageContainer.filters = [this.AsciiFilter];


    //this.stageContainer.blendMode = PIXI.BLEND_MODES.OVERLAY;





    // Global Listeners
    window.onresize = function(event) {

      // Stage
      let w = window.innerWidth;
      let h = window.innerHeight;
      this.app.renderer.resize(w, h);

      // Video
      this.videoSprite.width = this.getDimentions().width;
      this.videoSprite.height = this.getDimentions().height;

    }.bind(this);





    // Time!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.glitchCounter = 0;
    this.asciiFilterCounter = 0.2;
    this.app.ticker.add(function(delta) {

      //this.GodrayFilter.time = this.GodrayFilter.time + delta / 700;

      // Ascii
      this.asciiFilterCounter += 1;
      if(this.asciiFilterCounter >= 20){
        this.AsciiFilter.uniforms.pixelSize = 0;
        this.stageContainer.filters[0].enabled = false
      } else {
        this.AsciiFilter.uniforms.pixelSize = parseInt(this.asciiFilterCounter, 12);
        this.stageContainer.filters[0].enabled = true
      }

      this.mouseShape.x = this.mouse.clientX;
      this.mouseShape.y = this.mouse.clientY;


      // Glitch
      this.glitchCounter += 1;
      if(this.glitchCounter >= 40){
        this.Glitchfilter.offset = 0;
        this.RGBSplitFilter.red = [0,0];
        this.RGBSplitFilter.green = [0,0];
        this.RGBSplitFilter.blue = [0,0];
      } else {
        this.Glitchfilter.offset = this.glitchOffsets[_.random(0, this.glitchOffsets.length)];
        //console.log(RGBSplitFilter)
        //RGBSplitFilter.uniforms.red = rgbOffsets[_.random(0, rgbOffsets.length)];
        //RGBSplitFilter.uniforms.green = rgbOffsets[_.random(0, rgbOffsets.length)];
        //RGBSplitFilter.uniforms.blue = rgbOffsets[_.random(0, rgbOffsets.length)];
      }

    }.bind(this));
  }
  componentDidUpdate(){
    this.cleanupVideo();
    this.addVideo();
    this.glitchCounter = 0;
    this.asciiFilterCounter = 0;
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.vid !== this.props.vid){
      return true;
    }
    return false;
  }
  cleanupVideo(){
    this.video.baseTexture.destroy();
    this.video.destroy();
    this.videoSprite.destroy();
    this.videoContainer.destroy();
  }
  addVideo(){
    const {vid} = this.props;
    this.video = PIXI.Texture.fromVideo(vid);
    this.video.baseTexture.source.loop = true;
    this.video.baseTexture.source.muted = true;
    this.videoSprite = new PIXI.Sprite(this.video);
    this.videoSprite.loop = true;
    this.videoContainer = new PIXI.Container();
    this.videoSprite.width = this.getDimentions().width;
    this.videoSprite.height = this.getDimentions().height;
    this.Glitchfilter = new filters.GlitchFilter(
      150, //slices
      100, //offset
      0, //direction
      1, //fillMode
      0, //seed
      false, //average
      18, //minSize
      512, //sampleSize
      [90,0], //red
      [0,90], //green
      [0,0] //blue
    );
    this.glitchOffsets = [100,10,30,40,60,200,30,40,500];
    this.RGBSplitFilter = new filters.RGBSplitFilter([-10,0],[0,10],[0,0]);
    this.rgbOffsets = [[-10,0],[0,10],[0,0]];
    this.videoContainer.filters = [this.Glitchfilter, this.RGBSplitFilter];
    //this.videoSprite.anchor.set(0.5);
    this.videoContainer.addChild(this.videoSprite);
    //this.videoContainer.position.x = window.innerWidth / 2;
    //this.videoContainer.position.y = window.innerHeight / 2;
    //this.app.stage.addChild(this.videoContainer);
    //this.stageContainer.addChild(this.videoContainer);
    this.stageContainer.addChild(this.videoContainer);
  }

  onMouseMove = (e) => {
    e.persist();
    this.throttledMouseMove(e);
  }

  throttledMouseMove = (e) => {
    this.mouse.clientX = e.clientX;
    this.mouse.clientY = e.clientY;
  }

  render() {
    return (
      <div id='Video' onMouseMove={this.onMouseMove} ref={(elem) => this.pixiCont = elem}></div>
    );
  }
}

export default Video;
