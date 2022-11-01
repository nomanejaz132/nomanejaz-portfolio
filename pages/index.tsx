export default function Home() {
  return (
    <div className="border-x border-line-1 bg-primary-2">
      <div className="px-20">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-secondary-5 text-lg font-firacode font-normal leading-6">
              Hi all. I am
            </span>
            <h1 className="text-secondary-5 text-6xl font-firacode font-normal leading-normal">
              Noman Ejaz
            </h1>
            <p className="text-gradients-1 text-3xl font-firacode font-medium leading-normal">
              {">"} Frontend Engineer
            </p>
          </div>
          <div className="code-snippets w-[650px] h-[650px]"></div>
        </div>
      </div>
    </div>
  );
}
