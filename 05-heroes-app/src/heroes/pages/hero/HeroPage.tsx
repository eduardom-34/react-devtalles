import { useParams } from "react-router";

export const HeroPage = () => {

  const { idSlug } = useParams<{ idSlug: string }>();

  console.log(idSlug)

  return (
    <>
      HeroPage
    </>
  )
}
