import { navData } from "../constant/data";
export const Navbar2 = () => {
  return (
    <>
      <div>
        <div className="w-full h-auto cursor-pointer">
          <div className="flex items-center justify-between mx-auto w-10/12">
            {navData.map((data) => (
              <div
                key={data.text}
                className="flex flex-col items-center space-y-2"
              >
                <img
                  src={data.url}
                  alt={data.text}
                  className="w-16 h-16 object-cover"
                />
                <p className="text-sm font-medium text-gray-700">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
