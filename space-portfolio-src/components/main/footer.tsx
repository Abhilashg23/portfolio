import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap gap-6 py-6">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] text-white mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center gap-2 my-[10px] text-gray-400 hover:text-purple-400 transition"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="text-[14px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[14px] text-center text-gray-500">
          &copy; Abhilash G {new Date().getFullYear()} — Cloud &amp; Cybersecurity Engineer
        </div>
      </div>
    </div>
  );
};
