import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Started my second bachelor's degree in mathematics 🧮">
        In 2015 I realized that if I tried hard for two years, the university
        allowed me to study a second bachelor's degree, I did it and I started
        studying mathematics simultaneously.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Started at National Autonomous University of Honduras 🧑‍🎓">
        I applied to the best university in Honduras to start my bachelor's
        degree in systems engineering.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Started High School">
        At the institution they asked to choose a specialization and I decided
        to study computing.
      </Step>
      <Step title="Learned How To Program">
        I quickly learned the logic of programming, in my programming class the
        teacher taught us about Visual Fox Pro and I remember doing algorithms
        to calculate things like my GPA, taxes, etc.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="First Website">
        It was done in notepad and it was my first lines of HTML and CSS.
      </Step>
      <Step title="Create web pages for everything 😄">
        I made many web pages, for example about my favorite soccer team,
        biographies, I even created web pages for my friends.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="First E-mail ✉️">
        I created it in an internet café because the school asked us to vote for
        the{' '}
        <a href="https://whc.unesco.org/en/list/196/">
          Río Plátano Biosphere Reserve
        </a>
        {' (a paradise that is in my country) '}
        to become one of the 7 wonders of the world.
      </Step>
    </ul>
    <ul>
      <Step title="First Computer 🖥️">
        I got it the day I graduated from school, I played Full Tilt! Painball,
        Age of Empires II and I read about many things in a virtual encyclopedia
        that my mother bought me.
      </Step>
    </ul>
    <ul>
      <Step title="I messed up my first computer 🛠️">
        A week after receiving my computer I ruined it, even to this day my
        parents don't know it.
      </Step>
    </ul>
    <Divider />
    <Year>2003</Year>
    <ul>
      <Step title="First memory of a computer 🧑‍💻">
        In my school there was a computer lab, for an hour every week we went
        and I really enjoyed it. They used Windows 98 and I remember painting a
        lot of things in Paint, I learned very quickly to use a computer.
      </Step>
    </ul>
    <Divider />
    <Year>1997</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Joined Premper 🦎">
          One of my friends <a href="https://twitter.com/robert_raf" target="_blank">@robert_raf</a> told me that there was an opportunity for
          a software engineer where he was working to form an engineering team,
          I applied and got the job. We do cool things and have fun.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Machine learning conference 🤖">
          Together with 2 friends we presented to the college community during
          the Math Career Week the project called "Classification of music
          genres with supervised machine learning".
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
