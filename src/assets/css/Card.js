import styled from 'styled-components'

export const StyleCard=styled.div`
    width:300px;
    height:450px;
    border: 1px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    justify-content: flex-end;
    
    box-shadow: 10px 10px 20px blue;
    
    .title {
        align-items:center;
        font-size: 20px;
        margin: 0 auto;
        position:relative;
    }

    .title span{
        color: white;
        text-transform: uppercase;
        position: relative;
        top: 15px;
    }

    .card {
        position: relative;
        width: 280px;
        margin: auto;
        height: 290px;
        background: #262626;
        overflow: hidden;
        
        padding-bottom: 10px;

        img{
            height:100%;
        }

        .imgBx,
        .details {
            width: 100%;
            height: 100%;
            position: absolute;
            box-sizing: border-box;
            transition: .5s;
        }
        
        .imgBx {
            top: 0;
            left: 0;
        }
        &:hover .imgBx {
            top: 0;
            left: -100%;
        }
        .imgBx img {
            width: 100%;
        }
        .details {
            background: #262626;
            top: 0;
            left: 100%;
            padding: 60px 30px;
        }
        &:hover .details {
            top: 0;
            left: 0%;
        }
        .details h2 {
            color: #fff;
            text-align: center;
            margin: 0;
            padding: 0 0 10px;
            border-bottom: 2px solid #fff;

        }
        .details p {
            margin: 20px 0 0;
            color: #fff;
        }


    }
     
    .button{
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        position: relative;
        margin: auto;
            

        button{
            padding: 1em 1.5em;
            position: relative;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 12px;
            margin: 1em 0.8em;
            color:black;
            cursor: pointer;
                
            &::before, &::after{
                content: '';
                display: block;
                position: absolute;
                width: 20%;
                height: 20%;
                border: 2px solid;
                transition: all 0.6s ease;
                border-radius: 2px;
            }
            &::after{
                bottom: 0;
                right: 0;
                border-top-color: transparent;
                border-left-color: transparent;
                border-bottom-color: 566473;
                border-right-color: 566473;
            }
            &::before{
                top: 0;
                left: 0;
                border-bottom-color: transparent;
                border-right-color: transparent;
                border-top-color: 566473;
                border-left-color: 566473;
            }
            &:hover:after,
            &:hover:before{
                width: 100%;
                height: 100%;
            }
            
        }
    }
        

        

`