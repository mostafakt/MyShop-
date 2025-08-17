import ProfileCard from "@/components/profile/ProfileCard";

export default async function ProfilePage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-base-content">
        Your Profile
      </h1>
      <div className="max-w-4xl mx-auto">
        <ProfileCard />
      </div>
    </section>
  );
}