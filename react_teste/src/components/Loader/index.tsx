import './loader.css'
export default function Loader() {
    return (
        <div className='loader'>
            <div className="honeycomb">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span>Validando informações, aguarde...</span>
        </div>
    )
}