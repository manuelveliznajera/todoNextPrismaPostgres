import { cookies } from 'next/headers'
import { TabBar } from "@/components";


export const metadata = {
 title: 'Seo Cookies',
 description: 'Seo Cookies',
}

export default function cookiesPage() {

    const cookieStore = cookies()
  const tab = cookieStore.get('cookieTab')?.value ?? '1';
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
            <span className="text-3xl">Tabs</span>
            <TabBar currentIndex={+tab} />
            
        </div>
    </div>
  );
}