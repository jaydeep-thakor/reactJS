import React, { useEffect, useState } from 'react';

const App = () => {
  const [imgData, setImgData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [clickedImg, setClickedImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=27`);
        const data = await response.json();
        setImgData(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [pageNumber]);

  const handleNextPage = () => {
    setPageNumber(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prev => prev - 1);
    }
  };

  const handleImageClick = (image) => {
    setClickedImg(image);
  };

  const handleCloseModal = () => {
    setClickedImg(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-5xl font-bold text-gray-800 py-10">
        Random Photographs
      </h1>

      {isLoading ? (
        <div className="text-center text-2xl text-gray-600 mt-20">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {imgData.map((image) => {
            const thumbnailUrl = `https://picsum.photos/id/${image.id}/300/300`;
            return (
              <button
                key={image.id}
                onClick={() => handleImageClick(image)}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={thumbnailUrl}
                  alt={`Photo by ${image.author}`}
                  loading="lazy"
                />
                <div className="p-2 text-sm text-gray-600 truncate">
                  {image.author}
                </div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex justify-center mt-8 mb-4 gap-5">
        <button
          onClick={handlePrevPage}
          disabled={pageNumber === 1}
          className={`font-medium px-8 py-2 rounded-lg transition-all duration-300 ${
            pageNumber === 1
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
          }`}
        >
          Previous
        </button>
        <span className="flex items-center text-gray-700 font-medium">
          Page {pageNumber}
        </span>
        <button
          onClick={handleNextPage}
          className="bg-blue-600 text-white font-medium px-8 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 active:scale-95"
        >
          Next
        </button>
      </div>

      {clickedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg z-10"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              className="max-w-full max-h-[90vh] object-contain"
              src={clickedImg.download_url}
              alt={`Photo by ${clickedImg.author}`}
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800">
                {clickedImg.author}
              </p>
              <p className="text-sm text-gray-600">
                Dimensions: {clickedImg.width} × {clickedImg.height}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;