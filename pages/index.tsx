import Image from 'next/image';
import CodeSnippet from '../public/code-snippet.png';

export default function Home() {
  return (
    <div className="border-x border-line-1 bg-primary-2 h-screen overflow-hidden">
      <div className="lg:px-12 xl:px-24 2xl:px-32">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-secondary-5 text-lg font-firacode font-normal leading-6">
              Hi all. I am
            </span>
            <h1 className="text-secondary-5 text-6xl font-firacode font-normal leading-normal">
              Noman Ejaz
            </h1>
            <p className="text-gradients-1 text-3xl font-firacode font-medium leading-normal">
              {'>'} Frontend Engineer
            </p>
          </div>
          <div
            className="creatives xl:h-[600px] xl:w-[600px] 2xl:h-[800px] 2xl:w-[800px]"
            data-creative
          >
            <div data-creative className="translate-y-[-17px]">
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
