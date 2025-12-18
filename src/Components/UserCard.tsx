type UserCardProps = {
  name: string;
};

export default function UserCard({ name }: UserCardProps) {
  return <h2>Hello {name}</h2>;
}
