export default function TestimonialCard({starRating, pText, avatarImage, name, role}) {
    return (
        <>
                  <div className="px-4 py-8 border-2 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/star.svg" alt="A star icon" />
                      <img src="/star.svg" alt="A star icon" />
                      <img src="/star.svg" alt="A star icon" />
                      <img src="/star.svg" alt="A star icon" />
                      <img src="/star.svg" alt="A star icon" />
                    </div>
                    <p>
                      {pText}
                    </p>
        
                    <div className="flex items-center gap-4 border-t-2 border-t-gray-600 py-4 mt-4">
                      <img
                        src={avatarImage}
                        alt={`An avatar of ${name} smiling`}
                        className="w-16 h-16 rounded-full"
                      />
        
                      <div>
                        <span className="block">{name}</span>
                        <span>{role}</span>
                      </div>
                    </div>
                  </div>
        </>
    )
}