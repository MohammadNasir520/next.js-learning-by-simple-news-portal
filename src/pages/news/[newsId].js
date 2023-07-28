import RootLayout from "@/components/Layouts/RootLayout";
import { router } from "json-server";
import { useRouter } from "next/router";


const NewsDetailsPage = ({ news }) => {

    const router = useRouter()

    return (
        <div>
            <h1>{news?.title}</h1>
        </div>
    );
};

export default NewsDetailsPage;
NewsDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:5000/news/${router}`)
    const data = await res.json()
    console.log(data)
    return {
        props: {
            news: data
        }

    }
}