import { CakeSlice, ThermometerSnowflake } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold">Welcome, Username</h1>

      <div className="flex flex-col">
        <h2>Health Metrics</h2>
        <div className="w-full bg-white shadow-sm ">
          <div className="w-fit gap-2 grid grid-cols-2 grid-rows-2 ">
            <div className=" row-span-2">{/* Graphs */}</div>

            <div className="flex gap-1 items-center">
              <ThermometerSnowflake />
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">39.0</span>
                <span>Body Temperature</span>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <CakeSlice />
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold">12.0</span>
                <span>Glucose Level</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white shadow-sm p-2 mt-2">
          Incididunt duis sint aute occaecat sit velit anim. Anim proident ex
          consequat est elit aute aliqua laboris esse sint esse mollit nisi
          cupidatat. Aliqua pariatur enim sit laborum consequat ea aliquip
          ullamco id. Aliquip cupidatat laborum ut et amet non aliqua sit et
          pariatur ea quis eu. Reprehenderit ut enim ad eu reprehenderit minim
          elit magna dolore sit.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
