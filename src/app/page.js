import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";

export default function Home() {
  
  return (
    <main className="flex items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
    </main>
  )
}
