function Footer({ totalLikes, totalComments, totalShares, totalEngagement }) {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        marginTop: "40px",
        borderRadius: "8px"
      }}
    >
      <h3>📊 Engagement Statistics</h3>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div>👍 Total Likes: <strong>{totalLikes}</strong></div>
        <div>💬 Total Comments: <strong>{totalComments}</strong></div>
        <div>🔄 Total Shares: <strong>{totalShares}</strong></div>
        <div>📈 Total Engagement: <strong>{totalEngagement}</strong></div>
      </div>
    </footer>
  );
}

export default Footer;
