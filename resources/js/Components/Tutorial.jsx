import { Link } from "@inertiajs/react"

const Tutorial = ({ }) => {

  return (
    <>
      <div className="space-y-4 lg:items-stretch">
        <p className="text-sm md:text-base font-medium text-neutral-900">Cara pengisian Form</p>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Langkah 1
          </div>
          <div className="collapse-content">
            <p>ini masih kurang js nya </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Langkah 2
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Langkah 3
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Tutorial
