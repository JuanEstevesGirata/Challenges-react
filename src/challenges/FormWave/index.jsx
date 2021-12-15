import React, {useEffect} from 'react'



const FormWave = () => {
    

    useEffect(() => {
        const labels = document.querySelectorAll('.form-control label')

    labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('')
    })
    }, [])

    


    return (
        <>
            <div class="container">
                <h1>Login</h1>
                <form>
                    <div class="form-control">
                    <input type="text"  required/>
                    <label>Email</label>
                    </div>
                    <div class="form-control">
                    <input type="password"  required/>
                    <label>Password</label>
                    </div>
                    <button class="btn">Login</button>
                </form>

                <p>Don't have an account? <a href="#"> Registrer</a></p>
                </div>
                <style jsx>
                    {`
                    body{
                        color:#fff;
                        font-family: 'Muli', sans-serif;
                        margin: 0;
                        display:flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        overflow:hidden;
                    }

                    .container{
                        background-color: rgba(0,0,0,0.4);
                        padding:30px;
                        border-radius: 5px;
                    }

                    .container h1 {
                        text-align: center;
                    }

                    .container a {
                        text-decoration: none;
                        color:steelblue;
                    }

                    .btn{
                        width:100%;
                        padding:10px;
                        border-radius: 5px;
                        border:0;
                        margin: 20px 0;
                        background-color: lightblue;
                        font-family: inherit;
                        font-size: 16px;
                    }

                    .btn:focus {
                        outline:0;
                        transform: scale(0.98);
                    }

                    .form-control {
                        position: relative;
                        margin: 20px 0 30px;
                    }

                    .form-control input{
                        background-color: transparent;
                        border:0;
                        border-bottom: 2px solid #fff;
                        width:100%;
                        display:block;
                        padding: 15px 0;
                        color:#fff;
                        font-size: 16px;
                    }

                    .form-control input:focus, .form-control input:valid{
                        outline:0;
                        border-bottom-color:lightblue;
                    } 

                    .form-control label{
                        position: absolute;
                        top:15px;
                        left:0;
                    }

                    .form-control label span{
                    display:inline-block;
                    transition: transform 0.3s ease-in;
                    }

                    .form-control input:focus + label span, .form-control input:valid + label span{

                        transform: translateY(-30px);
                    }
                    
                    
                    
                    `}
                </style>
        </>
    )
}

export default FormWave
