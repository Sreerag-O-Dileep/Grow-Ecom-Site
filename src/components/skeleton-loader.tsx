export default function ProductCardLoader (){
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer">
            <div className="relative h-64 w-full bg-gray-200 overflow-hidden animate-pulse">
                <div className="h-full bg-gray-300" />
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-green-600 font-semibold bg-gray-300 h-4 w-1/3 animate-pulse block" />
                </div>

                <h3 className="text-lg font-semibold mb-1 bg-gray-300 h-6 w-1/2 animate-pulse block" />

                <div className="mb-2 w-full bg-gray-300">
                    <span className="text-xl font-bold text-red-600 bg-gray-300 h-6 w-1/4 animate-pulse block" />
                    <span className="text-gray-500 line-through ml-2 bg-gray-300 h-6 w-1/4 animate-pulse block" />
                    <span className="text-green-600 ml-2 bg-gray-300 h-6 w-1/4 animate-pulse block" />
                </div>

                <p className="text-gray-600 text-sm mb-4 bg-gray-300 h-4 w-full animate-pulse block" />

                <div className="flex flex-row gap-2">
                    <button className="w-60 bg-gray-300 text-white py-2 rounded-lg animate-pulse block h-10" />
                    <button className="w-60 bg-gray-300 text-white py-2 rounded-lg animate-pulse block h-10" />
                </div>
            </div>
        </div>
    );
};

