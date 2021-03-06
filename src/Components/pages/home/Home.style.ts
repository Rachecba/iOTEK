import styled from 'styled-components'


export const Container = styled.div`

    img {
        width: 100px;
    }
  
    .container-fluid {
        padding-right: 0px !important;
        padding-left: 0px !important;
    }    
    
    /* Slider */
    #textSlider.row {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100% !important;
    }
    #textSlider div {
        color: #404040;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
    }
    
    .iamCol {
        text-align: right;
        float: left;
        font-weight: 300;
        font-size:30pt;
    }
    .iamCol p:nth-child(6) { margin-top: -20pt !important; }
    .slideCol {
        text-align: left;
        overflow: hidden;
        font-weight: 900;
        font-size:70pt;
        display: block;
        white-space: nowrap;
    }
    .slideCol p { margin: 0px !important; }
    
    .scroller {
       height: 70pt;
       line-height: 70pt;
       overflow: hidden;
    }
    .scroller .inner { animation: 10s normal infinite running scroll; }
    @keyframes scroll {
       0%  	{margin-top: 0px;}
       15% 	{margin-top: 0px;}
    
       25%  {margin-top: -70pt;}
       40%  {margin-top: -70pt;}
       
       50%  {margin-top: -140pt;}
       65%  {margin-top: -140pt;}
    
       75%  {margin-top: -210pt;}
       90%  {margin-top: -210pt;}
    
       100% {margin-top: 0px;}
    }
    
    
    /*==========  Mobile First Method  ==========*/
    
    /* Custom, iPhone Retina */ 
    @media only screen and (min-width : 320px) and (max-width : 479px) {
        #textSlider.row { margin-right: 0px !important; margin-left: 0px !important; }
        .iamCol { text-align: center; font-size:20pt; }
        .iamCol p { display: inline !important; }
        .slideCol { font-size: 25pt; text-align: center; margin-top: -20px; }
    }
    
    /* Extra Small Devices, Phones */ 
    @media only screen and (min-width : 480px) and (max-width : 765px) {
        #textSlider.row { margin-right: 0px !important; margin-left: 0px !important; }
        .iamCol { text-align: center; font-size:25pt; }
        .iamCol p { display: inline !important; }
        .slideCol { font-size: 38pt; text-align: center; margin-top: -20px; }
    }
    
    /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) and (max-width : 992px) {
        #textSlider.row { margin-right: 0px !important; margin-left: 0px !important; }
        .iamCol { text-align: center; font-size:30pt; }
        .iamCol p { display: inline !important; }
        .slideCol { font-size: 50pt; text-align: center; margin-top: 5px; }
    }
    
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) and (max-width : 1200px) {
        #textSlider.row { margin-right: 0px !important; margin-left: 0px !important; }
        .iamCol { text-align: right; font-size:30pt; }
        .slideCol { font-size: 55pt; text-align: left; }
    }
`

export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CarouselText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
`