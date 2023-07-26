import { UserProfile, ProjectInterface } from "@/common.types";
import { getUserProjects } from "@/lib/actions";
import Link from "next/link";

type Props = {
    userId: string;
    projectId: string;
}

const RelatedProjects = async ({ userId, projectId }: Props) => {

    const result = await getUserProjects(userId) as { user?: UserProfile }

    const filteredProjects = result?.user?.projects?.edges?.filter(({ node }: { node: ProjectInterface }) => node?.id !== projectId);

    console.log(filteredProjects)

    if(filteredProjects?.length === 0) return null;

  return (
    <section className="flex flex-col mt-32 w-full">
        <div className="flexBetween">
            <p className="text-base font-bold">More by {result?.user?.name}</p>
            <Link href={`/profile/${result?.user?.id}`} className="text-primary-purple text-base">
                View All
            </Link>
        </div>
    </section>
  )
}

export default RelatedProjects;