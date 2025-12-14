interface Props {
  title: string;
  description?: string;
}


export const CustomHeader = ({ title, description }: Props) => {
  return (
    <>
      <div className="content-center">
        <h2>{title}</h2>
        {
          description && (

            <p>{description}</p>
          )
        }
      </div>
    </>
  )
}
