export default function Subscribe() {
  return (
    <>
      <section>
        <div className="px-4 py-6 text-center">
          <h2>Subscribe to our Newsletter</h2>

          <p className="py-4">
            Stay connected with our mission, get updates on our latest
            campaigns, inspiring stories, and ways you can make a difference,
            delivered straight to your inbox
          </p>

          <form className="text-center">
            <div className="flex items-center justify-center gap-2 py-4">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-white border-2 p-2 w-[70%] text-sm rounded-sm"
              />
              {/* <input
                type="submit"
                value="Subscribe Now"
                className="bg-green-800 text-white p-4 w-[35%] h-12 text-sm rounded-sm text-smtext-center"
              /> */}
              <button className="bg-green-800 text-white text-xs p-3 rounded-sm">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
