import React from 'react';
import ReactDOM from 'react-dom';
import './show.css';

export default class SlideShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slide: 0
        };

        // Ratio setting 3/2
        const ratioSet = this.props.ratio.split(":");
        this.ratioWH = ratioSet[0] / ratioSet[1];

        // Create values to call
        this.back = this.back.bind(this);
        this.font = this.font.bind(this);
        this.indexPage = this.indexPage.bind(this);
        this.newIndex = this.newIndex.bind(this);
        // this.dimensions = this.dimensions.bind(this);
        this.autoRun = this.autoRun.bind(this);
    }

    // Next page is + 1, prev page is -1 
    // Lenght of number page
    newIndex(step) {
        const slide = this.state.slide;
        const slideNumber = this.props.input.length;

        let slideNew = slide + step;

        if (slideNew >= slideNumber) slideNew = 0;
        else if (slideNew < 0) slideNew = slideNumber - 1;

        return slideNew;
    }

    // back to prev pic
    back() {
        this.setState({
            slide: this.newIndex(-1)
        });
    }

    // next to new pic
    font() {
        this.setState({
            slide: this.newIndex(1)
        });
    }

    // The page which is actived
    indexPage(index) {
        this.setState({
            slide: index
        })
    }

    // dimensions() {
    //     this.container.style.height
    //         = `${this.container.offsetWidth / this.ratioWH}px`;
    // }

    // set auto run for page
    autoRun() {
        this.setState({
            slide: this.newIndex(1)
        });
    }

    // Lifecycle components
    // This function will be use when components have been rendered
    // This will update width, height, auto mode, ... 
    componentDidMount() {
        this.root = ReactDOM.findDOMNode(this);
        this.container = this.root.querySelector(".container-slide");
        this.containerMid = this.root.querySelector(".container-dot");

        // this.dimensions();
        // window.addEventListener("resize", this.dimensions);

        if (this.props.mode === "auto") {
            const timeout = this.props.timeout || 6000;

            this.auto = setInterval(
                () => this.autoRun(),
                Number.parseInt(timeout)
            );
        }
    }

    // This function will use when components have been deleted 
    componentWillUnmount() {
        window.removeEventListener("resize", this.dimensions);
        if (this.auto) clearInterval(this.auto);
    }

    render() {
        return (
            <div className="slideshow-gallery">
                <div className="container-slide">
                    {
                        this.props.input.map((image, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        `slide ${this.state.slide === index ? "active" : ""}`
                                    }
                                >
                                    <img className="img" src={image.src} alt={image.caption} />
                                </div>
                            )
                        })
                    }
                    <div className="slide-btn">
                        <span className="back-btn" onClick={this.back}>❮</span>
                        <span className="next-btn" onClick={this.font}>❯</span>
                    </div>
                </div>
            </div>
        );
    }
}