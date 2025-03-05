type QueryParams = { [key: string]: string | string[] | undefined };

export default async function WeekReport({
  queryParams,
}: {
  queryParams: QueryParams;
}) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(queryParams);
  return (
    <section className="flex flex-col gap-8 items-center">
      <div>hi</div>
    </section>
  );
}
