import {SkeletonPost} from "@/components/Skeleton";

export default function Loading() {
  return(
    <div
      style={{
        'width': '72rem',
        'margin': '0 auto'
      }}
    >
      <SkeletonPost/>
    </div>
  )
}