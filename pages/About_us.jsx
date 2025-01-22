export default function About_Us(){
    return(
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-10">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Road to be a Web front-end Developer!
          </h2>

          <p className="mt-4 text-gray-700">
           We have nothing to say because we just to to know about React-JS hehehe
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
    )
}