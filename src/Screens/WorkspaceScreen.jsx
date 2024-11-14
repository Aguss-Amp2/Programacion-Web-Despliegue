import React from "react";
import { useParams } from "react-router-dom";
import workspaces from "../data/workspaceData";
import extractFormData from "../helpers/extractFormData";

//Sintaxis
//Si el elemento devuelve verdadero FIND dejara de buscar y retornara el elemento que coincida con esa condicion SINO encuantra a ningun elemento que coincida devolvera UNDERFINED
// lista.find((elemento) => {
//     return elemento.nombre == 'pepe'
// })

const WorkspaceScreen = () => {
    //Que hace use params
    const {workspace_id} = useParams()

    //Como buscarian el workspace por id?
    const workspace_found = workspaces.find(
        (workspace) => {
            return workspace.id == workspace_id
    })
    console.log(workspace_found)

    // const [messages, setMessages] = useState(workspace_found.messages)

    const enviarMensaje = (e) => {
        e.preventDefault()
        const form = e.target
        const form_value = extractFormData(form)
        console.log(form_value)
    }

    //LOCALSTORAGE solo puede guardar strings

    //Guardar un valor en localstorage
    //localStorage.setItem('username', 'pepe')

    //Recuperar un valor de localstorage (devuelve el valor o devuelve null)
    //const username = localStorage.getItem('username')
    //console.log(username)

    const arrayDeCosas = [{name: 'testy'}, {name: 'testy2'}]
    const arrayDeCosasString = JSON.stringify(arrayDeCosas)
    console.log(arrayDeCosasString)


    //JSON Javascript object notation
    //JSON.stringify transforma el objeto o array a un string en formato JSON

    //localStorage.setItem('cosas', arrayDeCosasString)

    const arrayDeCosasObtenidoJSON = localStorage.getItem('cosas')


    //Nos permite transformar un JSON string a un array/objeto
    const arrayDeCosasObtenido = JSON.parse(arrayDeCosasObtenidoJSON)

    console.log(arrayDeCosasObtenido)
    
    // const workspace_id = params.workspace_id //Les devolvera un objeto con los parametos de busqueda de esa url {workspcae_id: '1'}
    return(
        <div>
            <h1>{workspace_found.title}</h1>
            <div>
                <MessagesList messages={workspace_found.messages}/>
            </div>
            <form onSubmit={enviarMensaje}>
                <input type="text" placeholder="Escriba su mensaje.." name="mensaje"/>
                <button type="sumbit">Enviar</button>
            </form>
        </div>
    )
}

const MessagesList = ({messages}) =>{
    return(
        messages.map(message =>{
            return <Message key={message.id} {...message} />
        })
    )
}

const Message = ({texto, autor, hora, id}) =>{
    return(
        <div>
            <h3>{autor}</h3>
            <p>{texto}</p>
            <span>Hora: {hora}</span>
            <hr/>
        </div>
    )
}  

const DummyComponent = () => {
    const params = useParams()
    console.log({params})
    return(
        <div>Hola</div>
    )
}

export default WorkspaceScreen