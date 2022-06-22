import Container from '../components/Container';
import Featured from '../components/Featured/Featured';
import PropertyList from '../components/PropertyType/PropertyList';
import HomeLayout from '../layouts/HomeLayout';

export default function Home() {
  return (
    <HomeLayout>
      <Container>
        <Featured />
        <PropertyList />
      </Container>
    </HomeLayout>
  );
}
