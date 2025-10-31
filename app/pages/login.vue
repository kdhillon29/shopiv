<template>
  <div
    class="flex flex-col w-full shadow-md bg-slate-50 dark:bg-gray-800 justify-start items-center"
  >
    <div
      class="w-[80%] md:w-1/3 flex flex-col md:flex-row gap-3 p-2 my-6 md:my-12"
    >
      <button
        @click="githubLogin"
        type="button"
        class="text-white bg-green-800 py-3 hover:bg-green7500/90 focus:ring-4 focus:outline-none focus:ring-green-400/50 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-green-600/30 me-2 mb-2"
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clip-rule="evenodd"
          />
        </svg>
        Sign in with Github
      </button>
      <!-- <br /><br /> -->
      <button
        @click="googleLogin"
        type="button"
        class="text-white py-3 bg-orange-700 hover:bg-orange-700/90 focus:ring-4 focus:outline-none focus:ring-orange-700/50 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center dark:focus:ring-orange-500/55 me-2 mb-2"
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fill-rule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clip-rule="evenodd"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
    <div class="w-full md:w-[40%] flex flex-col justify-start items-center">
      <form @submit.prevent="login" class="w-full text-center my-6 space-y-6">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your email</label
          >
          <input
            v-model="email"
            type="email"
            required
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full max-sm:w-auto px-6 md:px-16 py-3 mx-auto text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm sm:w-auto text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {{ pending ? "Logging In ..." : "Log In" }}
        </button>

        <!-- <br /><br /> -->

        <!-- Success Message -->
        <div v-if="successMsg">
          <p
            id="filled_success_help"
            class="mt-2 text-xs text-green-600 dark:text-green-400"
          >
            <span class="font-medium">Well done! </span>{{ successMsg }}
          </p>
        </div>

        <!-- Errorr message -->
        <div v-if="errorMsg">
          <p
            id="filled_error_help"
            class="mt-2 text-xs text-red-600 dark:text-red-400"
          >
            <span class="font-medium">Oh, snapp! </span>{{ errorMsg }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const email = useState(() => null);
const password = useState(() => null);
const successMsg = useState(() => false);
const errorMsg = useState(() => false);

if (user.value) {
  await navigateTo("/");
}
const pending = useState(() => false);
const login = async () => {
  pending.value = true;
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  console.log("Login response pending:", pending);
  console.log("Login response data:", data);
  if (pending) {
    console.log("Login pending...", pending);
  }
  if (error) {
    successMsg.value = null;
    pending.value = false;
    errorMsg.value = error.message;
    return;
  }

  errorMsg.value = null;
  successMsg.value = "Redirecting...";
  pending.value = false;
  setTimeout(async () => {
    successMsg.value = null;
    await navigateTo("/");
  }, 2000);
};

const githubLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    successMsg.value = null;
    errorMsg.value = error.message;
    return;
  }

  errorMsg.value = null;
  successMsg.value = "Redirecting...";
  setTimeout(async () => {
    successMsg.value = null;
    await navigateTo("/");
  }, 2000);
};

const googleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    successMsg.value = null;
    errorMsg.value = error.message;
    return;
  }

  errorMsg.value = null;
  successMsg.value = "Redirecting...";
  setTimeout(async () => {
    successMsg.value = null;
    await navigateTo("/");
  }, 2000);
};
</script>
