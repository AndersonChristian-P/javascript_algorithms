const handleGetCart = async () => {
  await this.props.requestCart()
  this.ListeningStateChangedEvent({
    cart: this.props.cart
  })
}


module.exports = {
  getCart: async (req, res) => {
    const { cart } = req.session
    try {
      let returnCart = await cart
      if (returnCart) {
        res.status(200).send(returnCart)
      } else {
        throw new Error(401)
      }
    } catch (err) {
      res.sendStatus(404)
    }
  }
}

