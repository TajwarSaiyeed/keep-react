import { Metadata } from 'next'
import { getBlogs } from '~/utils/getMdxContent'
import Blog from '../components/Blog'

export const metadata: Metadata = {
  title: 'Blog || Keep React',
}

const page = () => {
  const blogs = getBlogs()
  return (
    <section>
      <div className="-mt-2 py-20 ">
        <div className="mx-auto max-w-7xl px-6 2xl:px-0">
          <div className="max-w-md space-y-3">
            <h1 className="text-heading-5 font-semibold text-metal-900 dark:text-white">
              Stay Updated with the Latest Keep React Library
            </h1>
            <p className="text-body-3 text-metal-600 dark:text-metal-300">
              Keep React library continues to evolve with new features, bug fixes, and performance improvements.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 ">
            {blogs?.map((blog) => <Blog key={blog.slug} {...blog} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
