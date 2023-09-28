function status(request, response) {
  response.status(200).json({ aaaa: "Eu amo café" });
}

export default status;
