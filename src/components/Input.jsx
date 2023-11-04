export default function Input({textInput , setTextInput} ){
    const getCurrentInput = (evt) =>{
        return setTextInput(evt.currentTarget.value);
    }
    return (
        <input onChange={ getCurrentInput } type="text" className='w-64 md:w-80 h-10 border rounded-md border-slate-500 bg-slate-200 focus:outline-none placeholder:text-xs text-center' placeholder='Inserisci un task.. ' value={textInput} required/>
    )
}