import { Suspense } from 'react';

import Loading from '@/components/loading';
import WeekReport from '@/components/weekreport';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const queryParams = await searchParams;

  return (
    <section className="flex flex-col gap-8 items-center justify-center min-h-dvh text-xl">
      <div>hi this is streaming</div>
      <Suspense fallback={<Loading />} key={queryParams.date as string}>
        <WeekReport queryParams={queryParams} />
      </Suspense>
    </section>
  );
}
