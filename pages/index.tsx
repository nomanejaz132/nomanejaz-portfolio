import Image from 'next/image';
import CodeSnippet from '../public/code-snippet.png';

export default function Home() {
  return (
    <div className="border-x border-line-1 bg-primary-2 h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-0 md:px-6 lg:px-12 xl:px-24 2xl:px-32 h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <span className="text-secondary-5 text-lg font-firacode font-normal leading-6">
              Hi all. I'm
            </span>
            <h1 className="text-secondary-5 md:text-5xl lg:text-6xl font-firacode font-normal md:leading-normal lg:leading-[80px]">
              Noman Ejaz
            </h1>
            <p className="text-gradients-1 md:text-2xl lg:text-3xl font-firacode font-medium leading-normal">
              {'>'} Frontend Engineer
            </p>
          </div>
          <div
            className="creatives md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] 2xl:h-[800px] 2xl:w-[800px]"
            data-creative
          >
            <div
              data-creative
              className="md:translate-y-[-100px] lg:translate-y-[-150px] xl:translate-y-[-120px] 2xl:translate-y-[-17px]"
            >
              <div className="creative-card" data-creative-card data-creative>
                <div data-creative-card>
                  <Image
                    src={CodeSnippet}
                    alt="Code Snippet"
                    className="image"
                    data-creative-card
                  />
                </div>
              </div>
              <div className="creative-card" data-creative-card data-creative>
                <div data-creative-card>
                  <Image
                    src={CodeSnippet}
                    alt="Code Snippet"
                    className="image"
                    data-creative-card
                  />
                </div>
              </div>
              <div className="creative-card" data-creative-card data-creative>
                <div data-creative-card>
                  <Image
                    src={CodeSnippet}
                    alt="Code Snippet"
                    className="image"
                    data-creative-card
                  />
                </div>
              </div>
              <div className="creative-card" data-creative-card data-creative>
                <div data-creative-card>
                  <Image
                    src={CodeSnippet}
                    alt="Code Snippet"
                    className="image"
                    data-creative-card
                  />
                </div>
              </div>
              <div className="creative-card" data-creative-card data-creative>
                <div data-creative-card>
                  <Image
                    src={CodeSnippet}
                    alt="Code Snippet"
                    className="image"
                    data-creative-card
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
