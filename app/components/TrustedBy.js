export default function TrustedBy() {
    return (
      <section className="bg-gray-100 py-12">
        <h2 className="text-2xl  text-center mb-6">Trusted By</h2>
        <div className="flex justify-center space-x-5">
          <img className="h-18 w-auto" src="/logoehero.png" alt="Client 1" />
          <img className="h-18 w-auto" src="/logoehero.png" alt="Client 2" />
          <img className="h-18 w-auto" src="/logoehero.png" alt="Client 3" />
          {/* Add as many logos as needed */}
        </div>
      </section>
    );
  }
  