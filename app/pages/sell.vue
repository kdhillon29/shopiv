<template>
  <div>
    <h1
      class="mt-6 text-xl md:text-3xl w-1/2 text-center mx-auto border-b-2 border-green-400 font-bold dark:text-white"
    >
      Add Product to Sell on ShopiVerse
    </h1>
    <form
      @submit.prevent="createProduct"
      class="flex flex-col gap-3 max-w-lg mx-auto mt-2 py-2 md:py-6 px-3 md:px-6"
    >
      <div class="mb-3">
        <label
          for="small-input"
          class="block text-sm font-medium text-gray-900 dark:text-white"
          >Product Title</label
        >
        <input
          v-model="productTitle"
          type="text"
          required
          id="small-input"
          class="w-full p-2 text-gray-900 border border-gray-500 rounded-lg text-xs bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-3">
        <label
          for="small-input"
          class="text-sm font-medium text-gray-900 dark:text-white"
          >Product Category</label
        >
        <input
          v-model="productCategory"
          ype="text"
          required
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="">
        <label
          for="small-input"
          class="block text-sm font-medium text-gray-900 dark:text-white"
          >Product Price</label
        >
        <input
          v-model="productPrice"
          type="text"
          id="small-input"
          required
          class="block w-full p-2 text-gray-900 border border-gray-500 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <label
        for="message"
        class="block text-sm font-medium text-gray-900 dark:text-white"
        >Product Description</label
      >
      <textarea
        v-model="productDescription"
        id="message"
        required
        rows="3"
        class="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your product description here..."
      ></textarea>

      <div class="mt-3">
        <div class="w-full flex justify-start mb-1">
          <label
            class="inline-flex w-32 text-xs font-medium text-gray-900 dark:text-white"
            for="user_avatar"
            >Upload Image:</label
          >
          <div class="inline-flex items-center justify-center w-full">
            <hr
              class="w-64 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-400"
            />
            <div
              class="absolute flex px-4 -translate-x-1/4 bg-white left-1/2 dark:bg-gray-900"
            >
              <svg
                class="w-2 h-2 text-gray-700 dark:text-gray-300 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path
                  d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
                />
              </svg>
              <span class="text-xs font-semibold text-zinc-700 dark:text-white"
                >Good Image help you sell more</span
              >
              <svg
                class="w-2 h-2 text-gray-700 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path
                  d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- <br /> -->
        <!-- <br /> -->
        <div class="flex gap-1">
          <input
            @change="handleFileChange"
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
          <button
            @click="uploadImage"
            type="button"
            class="text-white bg-gradient-to-br mt-1 from-teal-900 to-green-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-rose-200 dark:focus:ring-rose-500 font-medium rounded-full text-sm px-2 py-1 text-center me-2"
          >
            Upload
          </button>
        </div>
      </div>
      <!-- Success Message -->
      <div v-if="imageUploadSuccessMsg">
        <p
          id="filled_success_help"
          class="mt-2 text-xs text-green-600 dark:text-green-400"
        >
          <span class="font-medium">Well done! </span
          >{{ imageUploadSuccessMsg }}
        </p>
      </div>

      <!-- Errorr message -->
      <div v-if="imageUploadErrorMsg">
        <p
          id="filled_error_help"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">Oh, snapp! </span>{{ imageUploadErrorMsg }}
        </p>
      </div>

      <div class="mt-6 px-6 md:px-12 flex justify-between">
        <button
          type="submit"
          class="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          {{ isPending ? "Adding New Product.." : "Add Product" }}
        </button>

        <button
          @click="clearEveryThing"
          type="reset"
          class="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
        >
          Rest Form
        </button>
      </div>

      <!-- Success Message -->
      <div v-if="productCreationSuccessMsg">
        <p
          id="filled_success_help"
          class="mt-2 text-xs text-green-600 dark:text-green-400"
        >
          <span class="font-medium">Well done! </span
          >{{ productCreationSuccessMsg }}
        </p>
      </div>

      <!-- Errorr message -->
      <div v-if="productCreationErrorMsg">
        <p
          id="filled_error_help"
          class="mt-2 text-xs text-red-600 dark:text-red-400"
        >
          <span class="font-medium">Oh, snapp! </span
          >{{ productCreationErrorMsg }}
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

if (!user.value) await navigateTo("/login");

const productTitle = useState(() => null);
const productDescription = useState(() => null);
const productPrice = useState(() => null);
const productCategory = useState(() => null);
const productImage = useState(() => null);
const imageUrl = useState(() => null);
const imageUploadSuccessMsg = useState(() => null);
const imageUploadErrorMsg = useState(() => null);
const productCreationSuccessMsg = useState(() => null);
const productCreationErrorMsg = useState(() => null);
const isPending = useState(() => false);

const clearEveryThing = () => {
  productTitle.value = null;
  productDescription.value = null;
  productPrice.value = null;
  productCategory.value = null;
  imageUrl.value = null;
  imageUploadSuccessMsg.value = null;
  imageUploadErrorMsg.value = null;
  productCreationErrorMsg.value = null;
  productCreationSuccessMsg.value = null;
};

const handleFileChange = (event) => {
  productImage.value = event.target.files[0];
};

const uploadImage = async () => {
  if (!productImage.value) {
    if (import.meta.client) {
      alert("Please select an image to upload");
    }
    return;
  }

  const image = productImage.value;
  try {
    const { data, error } = await supabase.storage
      .from("shopiv-images")
      .upload(`public/${image.name}`, image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (data) {
      imageUploadSuccessMsg.value = "Image Uploaded";
      const { data } = await supabase.storage
        .from("shopiv-images")
        .getPublicUrl(`public/${image.name}`);
      imageUrl.value = data.publicUrl;
    }
  } catch (err) {
    imageUploadErrorMsg.value = err.message;
  }
};

const createProduct = async () => {
  const {
    data: product,
    error,
    pending,
  } = await useFetch("/api/products/create-new-product", {
    query: {
      title: productTitle,
      description: productDescription,
      image: imageUrl,
      category: productCategory,
      price: productPrice,
    },
  });
  if (pending) isPending.value = true;

  if (error.value) {
    productCreationErrorMsg.value = "An error happened, try again...";
    console.log("server error check error messages", error);
    return;
  }

  productCreationSuccessMsg.value =
    "Product created successfully, Redirecting...";
  //   const productID = product;

  const { insertId } = product.value[0];
  console.log("product id ", insertId);
  console.log("product arrar is ", product.value[0]);
  setTimeout(async () => {
    isPending.value = false;
    await navigateTo(`/product-${insertId}`);
  }, 1000);
};
</script>
