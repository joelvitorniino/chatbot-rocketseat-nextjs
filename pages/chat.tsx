export default function Chat() {
    return (
        <div className="h-full box-border">
            <form className="h-full flex justify-center items-center flex-col">
                <div className="w-600 h-400 ml-5 mr-0 border border-solid border-whiteLight p-5 overflow-y-auto"></div>
                <input type="text" name="name" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm" placeholder="Digite seu nome:" />
                <input type="text" name="message" className="w-600 border border-solid border-whiteLight h-12 pl-0 pr-5 text-sm" placeholder="Digite sua mensagem:" />
                <button className="w-600 h-12 text-sm bg-blueLight text-center leading-md font-bold text-white mt-3 hover:text-gray-300">Enviar</button>
            </form>
        <br />
        </div> 
    )
}