import React, { Component } from 'react'


export default class ImageSlider extends Component {
    transitionInterval=null;
    activeImage=0;
    state={
        topImage: this.props.images[0],
        bottomImage: null,
        transition: 0
    }

    switchImage=()=>{
        const {images=[], duration=2000}=this.props
        if (images.length < 2) return;

        if(this.transitionInterval!==null) return

        const durationSeconds=duration / 1000;
        
        const bottom = images[this.activeImage + 1] ? images[this.activeImage + 1] : images[0];
        
        this.setState({bottomImage: bottom})

        this.transitionInterval=setInterval(()=>{

            this.setState({transition: this.state.transition+(1 / (60 * durationSeconds))});
        }, 1000 / 60)
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.active!==this.props.active){
            if(this.props.active) return this.switchImage();
        }
        if(this.state.transition>=1){
            this.finishTransition();
            if(this.props.active && !this.transitionInterval) this.switchImage();
        }
        
    }


    componentWillUnmount(){
        this.stopTransition();
    }

    stopTransition=()=>this.transitionInterval && clearInterval(this.transitionInterval);

    finishTransition=()=>{
        this.stopTransition();
        this.transitionInterval=null;
        this.setState({topImage: this.state.bottomImage, bottomImage: null, transition: 0});
        this.activeImage=(this.activeImage+1) % this.props.images.length;
    }

    render() {

        return (
            <div className="imageSlider">
                <div className="imageSliderContainer">
                    {this.state.bottomImage && <img style={{ opacity: this.state.transition }} src={this.state.bottomImage} alt="bottomImage" />}
                    <img src={this.state.topImage} style={{ opacity: 1 - this.state.transition }} alt="topImage" />
                </div>
            </div>
        )
    }
}
