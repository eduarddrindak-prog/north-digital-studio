import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


export default function MainLayout({
  children,
}:{
  children:React.ReactNode;
}){

  return (

    <>

      <Header />

      <main className="pt-20">
        {children}
      </main>

      <Footer />

    </>

  );

}