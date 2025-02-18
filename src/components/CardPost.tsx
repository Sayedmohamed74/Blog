export default function CardPost() {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <div>
        <img className=" w-full aspect-3/2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" />
      </div>
      <div className="info-post">
        <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-600">sayed</span>
            <span className="text-neutral-400 ">12/12/2021</span>
        </div>
        <h3 className="text-lg font-semibold">Title post</h3>
        <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus harum voluptates illum nihil similique? Facilis, facere dolor! Odit sequi eius culpa tempora ex cum quisquam harum labore et. Nam, molestiae.</p>
      </div>
    </div>
  );
}
