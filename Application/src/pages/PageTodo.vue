<template>
  <q-page class="q-pa-md">
    <q-list 
    separator
    bordered
    >
      <q-item 
      v-for="task in tasks"
      :key="task.id"
      @click="task.completed = !task.completed"
      :class="!task.completed ? 'bg-green-2' : 'bg-teal-2'"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>
        <q-item-section>
          <q-item-label
          :class="{' text-strikethrough ': task.completed }">
          {{ task.name }} 
          </q-item-label>
          </q-item-section>
            <q-item-section side>
                <div class="row">
                    <div class="column-justify-center">
                    <q-icon 
                     name="event" 
                     size="18px"
                     class="q-mr-xs"
                        />
                    </div>
                <div class="column">
                    <q-item-label caption
                        class="row justify-end"> 
                        {{ task.dueDate }} 
                    </q-item-label>
                        <q-item-label caption 
                            class="row justify-end">
                            <small> {{ task.dueTime }} </small> 
                    </q-item-label>
              </div>
            </div>
          <!-- <q-icon name="star" color="blue"/> -->
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
    data() {
        return {
            tasks: [{
                id: 1,
                name: 'Go to Shop',
                completed: false,
                dueDate: '2019/10/13',
                dueTime: '16:40 WIB'
            },
            {
                id: 2,
                name: 'Get Some air',
                completed: false,
                dueDate: '2019/10/14',
                dueTime: '20:40 WIB'
            },
            {
                id: 3,
                name: 'Go to the Bank',
                completed: false,
                dueDate: '2019/10/15',
                dueTime: '08:00 WIB'
            }
            ]
        }
    }
}
</script>

<style scoped>

</style>

