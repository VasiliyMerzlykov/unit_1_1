export default function live(user) {
  return (user.health >= 50 && 'healthy') || (user.health <= 50 && user.health >= 15 && 'wounded') || 'critical';
}
