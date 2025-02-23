import { Fragment } from "react"

function About() {
  return (
    <Fragment>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We create
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Our Application
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About