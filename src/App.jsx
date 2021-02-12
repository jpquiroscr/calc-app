// importación
/* eslint no-eval: 0*/
import React, { useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css' 


// generación de la función del componente
//función fecla o Arrow Function
const App = () => {
    //lo que ejecuta la función
   
    //const arrayTextoFuncionModificaTexto = useState("")

   //arrayTextoFuncionModificaTexto => ["", funcion] 

    // 1er posicion: valor (que inicialmente es el valor por defecto)
   //const texto = arrayTextoFuncionModificaTexto[0]

   // 2da posición: función que me va a permitir modificar el valor por defecto
   //const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]


   //array Destructuring
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)
    
    //operador ternario
    // (esVeradero) ? (resultadoPorverdadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items[items.length-1] : "0"
    return (
    <main className='react-calculator'>
        <Result value={value} />
        <Numbers onClickNumber={number => {
            
            setStack(`${stack}${number}`)
        }}
        />
        <Functions
            onContentClear={() => {setStack("")}}
                
            onDelete={() => {
                
                if(stack.length> 0) {
                    const newStack = stack.substring(0, stack.length - 1)
                    
                    setStack(newStack)

                }
                
            }}    

        />
        <MathOperations 
            onClickOperation={operation => {
                
                setStack(`${stack}${operation}`)
            }} 
            onClickEqual={equal=> {
                
                setStack(eval(stack).toString())

            }}
        />
    </main>)
}

// exportación
export default App