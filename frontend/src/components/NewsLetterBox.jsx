const NewsLetterBox = ()=> {
    
    return(
        <div className="text-center mt-10">
            <p className="text-2xl font-medium text-gray-800">Subscribe Now and get 20% off.</p>
            <p className="text-gray-400 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus repellat id, assumenda eaque similique enim maxime fuga aliquam mollitia ratione corrupti molestiae illum rerum distinctio deleniti amet suscipit repellendus saepe.</p>
            <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-6">
                <input className="w-full sm:flex-1 outline-none" type="text" placeholder="Enter your email" />
                <button type="submit" onSubmit={(e)=>{e.preventDefault();}} className="bg-black text-white px-10 py-4 text-xs md:text-sm">SUBMIT</button>
            </form>
        </div>
    )
}

export default NewsLetterBox;