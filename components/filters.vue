<template>
  <div class="container">
    <v-container class="filter-bar-container">
      <v-row dense>
        <!-- Individual Filter Dropdowns -->
        <v-col
          v-for="(filter, index) in filters"
          :key="index"
          cols="auto"
          class="filter-btn-wrapper"
        >
          <v-menu
            v-model="filter.isOpen"
            :close-on-content-click="false"
            offset-y
            transition="slide-y-reverse-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="filter-btn"
                rounded
                elevation="0"
              >
                {{ filter.name }}
                <v-icon right small>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <!-- Specific implementation for "Fiyat" dropdown -->
            <v-card v-if="filter.name === 'Fiyat'" class="price-dropdown">
              <v-container>
                <v-row justify="center" class="price-range-row">
                  <v-col cols="6" class="price-input-wrapper">
                    <v-text-field
                      v-model="filter.minPrice"
                      outlined
                      rounded
                    />
                  </v-col>
                  <v-col cols="6" class="price-input-wrapper">
                    <v-text-field
                      v-model="filter.maxPrice"
                      outlined
                      rounded
                    />
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="6">
                    <v-btn rounded block outlined @click="applyFilter(index)" style="background-color: white;">
                      Filtrele
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn rounded block outlined @click="clearFilter(index)" style="background-color: white;">
                      Temizle
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

            <!-- "Ölçü" dropdown logic -->
            <v-card v-else-if="filter.name === 'Ölçü'" class="size-dropdown">
              <v-list>
                <v-list-item
                  v-for="(option, optionIndex) in filter.options"
                  :key="optionIndex"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ option.label }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <div class="size-count-wrapper">
                      <span class="size-count">{{ option.count }}</span>
                      <v-checkbox
                        v-model="option.checked"
                        :value="option.label"
                      ></v-checkbox>
                    </div>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
            <!-- "Ayak Rengi" dropdown logic -->
            <v-card v-else-if="filter.name === 'Ayak Rengi'" class="size-dropdown">
              <v-list>
                <v-list-item
                  v-for="(option, optionIndex) in filter.options"
                  :key="optionIndex"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ option.label }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <div class="size-count-wrapper">
                      <span class="size-count">{{ option.count }}</span>
                      <v-checkbox
                        v-model="option.checked"
                        :value="option.label"
                      ></v-checkbox>
                    </div>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
            <!-- "Fonksiyon" dropdown logic -->
            <v-card v-else-if="filter.name === 'Fonksiyon'" class="size-dropdown">
              <v-list>
                <v-list-item
                  v-for="(option, optionIndex) in filter.options"
                  :key="optionIndex"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ option.label }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <div class="size-count-wrapper">
                      <span class="size-count">{{ option.count }}</span>
                      <v-checkbox
                        v-model="option.checked"
                        :value="option.label"
                      ></v-checkbox>
                    </div>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>

            <v-card v-else-if="filter.name === 'Sıralama'" class="size-dropdown">
              <v-list>
                <v-list-item
                  v-for="(option, optionIndex) in filter.options"
                  :key="optionIndex"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ option.label }}</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <div class="size-count-wrapper">
                      <span class="size-count">{{ option.count }}</span>
                      <v-radio
                        v-model="option.checked"
                        :value="option.label"
                      ></v-radio>
                    </div>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>


            <!-- Default dropdown logic -->
            <v-list v-else>
              <v-list-item-group
                v-if="filter.hasDropdown"
                v-model="filter.selected"
                style="height: auto; max-height: 400px;"
              >
                <!-- Specific logic for Renk (Color) dropdown -->
                <div v-if="filter.name === 'Renk'" class="color-grid">
                  <div
                    v-for="(option, optionIndex) in filter.options"
                    :key="optionIndex"
                    class="color-item-wrapper"
                  >
                    <div
                      class="color-item"
                      :style="{ backgroundColor: option.value }"
                      @click="selectOption(index, option)"
                    ></div>
                    <div class="color-label">{{ option.label }}</div>
                    <div class="color-label">{{ option.count }}</div>
                  </div>
                </div>

                <v-list-item
                  v-else
                  v-for="(option, optionIndex) in filter.options"
                  :key="optionIndex"
                  @click="selectOption(index, option)"
                >
                  <v-list-item-title>{{ option.label }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-col>

        <!-- All Filters Button -->
        <v-col cols="auto">
          <v-btn
            class="filter-btn"
            rounded
            elevation="0"
            @click="toggleAllFilters"
          >
            Tüm Filtreler
            <v-icon right>mdi-tune</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        {
          name: "Sıralama",
          hasDropdown: true,
          isOpen: false,
          selected: "most_sold",
          options: [
            { value: "most_sold", label: "En Çok Satanlar" },
            { value: "price_asc", label: "Artan Fiyata Göre" },
            { value: "price_desc", label: "Azalan Fiyata Göre" },
            { value: "new_products", label: "Yeni Ürünlere Göre" },
            { value: "name_asc", label: "İsme Göre (A-Z)" },
            { value: "name_desc", label: "İsme Göre (Z-A)" },
          ],
        },
        {
          name: "Renk",
          hasDropdown: true,
          isOpen: false,
          selected: null,
          options: [
            { value: "#808080", label: "gri", count: "371" },
            { value: "#f5f5dc", label: "bej", count: "306" },
            { value: "#000000", label: "siyah", count: "81" },
            { value: "#008000", label: "yeşil", count: "80" },
            { value: "#0000ff", label: "mavi", count: "73" },
            { value: "#ffffff", label: "beyaz", count: "34" },
            { value: "#ff0000", label: "kırmızı", count: "32" },
            { value: "#814820", label: "kahverengi", count: "22" },
            { value: "#ffdb00", label: "sarı", count: "7" },
            { value: "#ff9a02", label: "turuncu", count: "2" },
            { value: "#ff9a02", label: "çok renkli", count: "2" },
            { value: "#ffb8c3", label: "pembe", count: "1" },
          ],
        },
        {
          name: "Fonksiyon",
          hasDropdown: true,
          isOpen: false,
          selectedOptions: [],
          options: [
            { value: "three_seat", label: "3'lü Kanepe", count: 98 },
            { value: "two_seat", label: "2'li Kanepe", count: 91 },
            { value: "two_seat_lounger", label: "2'li Kanepe ve uzanma koltuğu", count: 65 },
            { value: "three_seat_lounger", label: "3'lü Kanepe ve uzanma koltuğu", count: 47 },
            { value: "single_seat", label: "Tekli Koltuk", count: 41 },
          ],
        },
        {
          name: "Kategori",
          hasDropdown: true,
          isOpen: false,
          options: [
            { value: "Koltuk Takımları", label: "Koltuk Takımları", count: "1" },
            { value: "Kumaş Kanepler", label: "Kumaş Kanepler", count: "1" },
            { value: "Modüler Kanepler", label: "Modüler Kanepler", count: "1" },
            { value: "Kanepe Aksesuaları", label: "Kanepe Aksesuaları", count: "1" },
            { value: "Kanepe Kılıfları", label: "Kanepe Kılıfları", count: "1" },
            { value: "L koltuklar", label: "L koltuklar", count: "1" },
            { value: "İkili Kanepler", label: "İkili Kanepler", count: "1" },
            { value: "Üçlü Kanepler", label: "Üçlü Kanepler", count: "1" },
            { value: "Yataklı Kanepler", label: "Yataklı Kanepler", count: "1" },
            { value: "Dörtlü Koltuklar", label: "Dörtlü Koltuklar", count: "1" },
            { value: "U Koltuklar", label: "U Koltuklar", count: "1" },
            { value: "Uzanma Koltukları", label: "Uzanma Koltukları", count: "1" },
            { value: "Deri Kanepler", label: "Deri Kanepler", count: "1" },
          ],
        },
        {
          name: "Fiyat",
          hasDropdown: true,
          isOpen: false,
          minPrice: null,
          maxPrice: null,
        },
        {
          name: "Ölçü",
          hasDropdown: true,
          isOpen: false,
          options: [
            { value: "140x200 cm", label: "140x200 cm", count: 4, checked: false },
            { value: "15 cm", label: "15 cm", count: 4, checked: false },
            { value: "140x188 cm", label: "140x188 cm", count: 3, checked: false },
            { value: "12 cm", label: "12 cm", count: 2, checked: false },
            { value: "20 cm", label: "20 cm", count: 2, checked: false },
            { value: "67x47 cm", label: "67x47 cm", count: 1, checked: false },
          ],
        },
        {
          name: "Ayak Rengi",
          hasDropdown: true,
          isOpen: false,
          options: [
            { value: "ahşap", label: "ahşap",count: 38, checked: false  },
            { value: "metal", label: "metal",count: 38, checked: false  },
            { value: "huş", label: "huş",count: 18, checked: false  },
            { value: "kahverengi", label: "kahverengi",count: 18, checked: false  },
          ],
        },
      ],
    };
  },
  methods: {
    selectOption(filterIndex, option) {
      this.filters[filterIndex].selected = option.value;
      console.log(
        `Selected ${option.label} (${option.value}) from ${this.filters[filterIndex].name}`
      );
    },
    toggleAllFilters() {
      console.log("All filters button clicked");
    },
    toggleDropdown(index) {
      this.filters[index].isOpen = !this.filters[index].isOpen;
    },
    applyFilter(index) {
      const filter = this.filters[index];
      console.log(`Applying filter: Min Price = ${filter.minPrice}, Max Price = ${filter.maxPrice}`);
      // Add logic to update the filtered results
    },
    clearFilter(index) {
      const filter = this.filters[index];
      filter.minPrice = null;
      filter.maxPrice = null;
      console.log("Cleared price filter");
    },
  },
};
</script>

<style scoped>
.filter-bar-container {
  border-radius: 20px;
}

.filter-btn {
  margin-right: 10px;
  background-color: white;
  color: black;
  font-weight: 800;
  text-transform: none;
  font-size: 11px;
}

.filter-btn:hover {
  background-color: #e0e0e0;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.color-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.color-item {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #ddd; /* Optional for better visibility */
}

.color-item-wrapper:hover {
  background-color: #e9e6e6;
  cursor: pointer;
}

.color-label {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
  color: #333;
}

.price-dropdown {
  padding: 16px;
  border-radius: 12px;
  background-color: white;
}

.size-dropdown {
  width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: white;
}

.size-count-wrapper {
  display: flex;
  align-items: center;
}

.size-count {
  font-weight: bold;
  color: gray;
  margin-right: 8px;
}

.v-btn {
  font-weight: bold;
  text-transform: none;
}
</style>
