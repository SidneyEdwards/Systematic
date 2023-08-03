const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Footer() {
  return (
    <div style={styles.container}>
      <h5>Brought to You by Team GetIt!</h5>
    </div>
  );
}
