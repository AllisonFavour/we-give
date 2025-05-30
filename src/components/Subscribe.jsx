export default function Subscribe() {
  return (
    <>
      <section>
        <div className="px-4 py-6">
          <h2>Subscribe to our Newsletter</h2>

          <p className="py-4">
            Stay connected with our mission, get updates on our latest
            campaigns, inspiring stories, and ways you can make a difference,
            delivered straight to your inbox
          </p>

          <form className="">
            <div className="flex items-center gap-2 py-4">
              <input type="text" placeholder="Email Address" className="bg-white border-2 p-4 w-[65%] h-12 text-sm rounded-sm" />
              <input type="submit" value="Subscribe Now" className="bg-green-800 text-white p-4 w-[35%] h-12 text-sm rounded-sm" />
              {/* <button className="bg-green-800 p-4 w-[40%] h-12">Subscribe Now</button> */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
