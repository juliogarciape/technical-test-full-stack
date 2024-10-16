import { CreateProduct } from '@/actions/products'

export default function ProductsPage() {
	return (
		<div className="gap-6 px-12 flex items-start justify-center">
			<div className="w-1/2">
				<h3 className="text-2xl text-center pb-5 font-bold text-slate-900">
					My Products
				</h3>
			</div>
			<div className="w-1/2">
				<h3 className="text-2xl text-center pb-5 font-bold text-slate-900">
					New Product 📝
				</h3>
				<div className="p-2">
					<div className="m-auto max-w-screen-sm grid grid-col-2">
						<div className="rounded-lg bg-white p-8 shadow-lg col-span-3">
							<form action={CreateProduct} className="space-y-4">
								<div>
									<label className="sr-only">Name</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Name:"
										type="text"
										id="name"
									/>
								</div>
								<div>
									<label className="sr-only">Price</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Price:"
										type="number"
										id="name"
									/>
								</div>
								<div>
									<label className="sr-only">Stock</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Stock:"
										type="number"
										id="name"
									/>
								</div>
								<div>
									<label className="sr-only">Category</label>
									<select
										className="w-full rounded-lg border-gray-200 p-3 text-sm bg-transparent"
										name=""
										id=""
									>
										<option value="">Category</option>
									</select>
								</div>
								<div>
									<label className="sr-only">
										Description
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Description:"
										type="text"
										id="name"
									/>
								</div>

								<div className="mt-4">
									<button
										type="submit"
										className="w-full rounded-lg bg-yellow-500 px-5 py-3 flex items-center gap-3 justify-center font-bold text-white"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
